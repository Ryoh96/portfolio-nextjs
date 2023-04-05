import type { MutableRefObject } from 'react'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Proton from 'three.proton.js'

export const useParticle = (
  container: MutableRefObject<HTMLElement | null>
) => {
  const containerWidth = useRef(0)
  const containerHeight = useRef(0)

  useEffect(() => {
    const stageWidth = window.innerWidth
    const stageHight = window.innerHeight
    const deviceRatio = window.devicePixelRatio
    //シーン
    const scene = new THREE.Scene()
    //カメラ
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    )
    camera.position.set(0, 0, 2)
    //ライト
    const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820)
    scene.add(ambient)
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(1, 10, 6)
    scene.add(light)
    //レンダラ
    const renderer = new THREE.WebGL1Renderer({ antialias: true, alpha: false })
    renderer.setSize(stageWidth * deviceRatio, stageHight * deviceRatio)
    renderer.domElement.style.width = stageWidth + 'px'
    renderer.domElement.style.height = stageHight + 'px'
    renderer.domElement.id = 'canvas_threejs'
    //コンテナ
    if (container.current !== undefined) {
      containerWidth.current = container.current?.offsetWidth as number
      containerHeight.current = container.current?.offsetHeight as number
    }
    //リサイズ
    const onResize = () => {
      if (container.current !== undefined) {
        containerWidth.current = container.current?.offsetWidth as number
        containerHeight.current = container.current?.offsetHeight as number
      }
      camera.aspect = containerWidth.current / containerHeight.current
      renderer.setSize(containerWidth.current, containerHeight.current)
      camera.updateProjectionMatrix()
    }
    //プロトン
    const createSprite = () => {
      const map = new THREE.TextureLoader().load('/gear-logo.svg')
      const material = new THREE.SpriteMaterial({ map: map })
      return new THREE.Sprite(material)
    }
    const createEmitter = () => {
      const emitter = new Proton.Emitter()
      emitter.rate = new Proton.Rate(
        new Proton.Span(0, 5),
        new Proton.Span(0.1, 0.25)
      )
      emitter.addInitialize(new Proton.Mass(1))
      emitter.addInitialize(new Proton.Radius(10))
      emitter.addInitialize(new Proton.Life(1, 8))
      emitter.addInitialize(new Proton.Body(createSprite()))
      emitter.addInitialize(new Proton.Position(new Proton.BoxZone(3)))
      emitter.addInitialize(
        new Proton.Velocity(0.1, new Proton.Vector3D(0, -0.1, 0.1), 0.2)
      )
      emitter.addBehaviour(new Proton.Scale(Math.random() * 0.03 + 0.05, 0.01))
      emitter.addBehaviour(new Proton.Alpha(1, 0, Infinity, Proton.easeInSine))
      emitter.addBehaviour(new Proton.Gravity(0.005))
      emitter.addBehaviour(new Proton.Rotate(0, [-15, 15]))
      emitter.addBehaviour(new Proton.Color('random'))
      emitter.p.x = 0
      emitter.p.y = 0
      emitter.p.z = 1.5
      emitter.emit()
      return emitter
    }
    const proton: Proton = new Proton()
    proton.addEmitter(createEmitter())
    proton.addRender(new Proton.SpriteRender(scene))
    const render = () => {
      renderer.render(scene, camera)
      proton.update()
      requestAnimationFrame(render)
    }

    container.current?.appendChild(renderer.domElement)
    window.addEventListener('resize', onResize, false)
    onResize()
    render()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
