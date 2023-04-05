import type { ChartData, ChartOptions } from 'chart.js'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

type CountUpDoughnutsProps = {
  percentage: number
  className?: string
}

const CountUpDoughnut = ({ percentage, className }: CountUpDoughnutsProps) => {
  const data: ChartData<'doughnut'> = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 0)'],
        borderWidth: 0,
      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    cutout: '80%',
  }

  return <Doughnut data={data} options={options} className={className} style={{maxWidth: "300px"}}/>
}

export default CountUpDoughnut
