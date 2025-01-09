import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'

type CardItemProps = {
  index: number
  date: string
  title: string
  description: string
}

const CardItem: React.FC<CardItemProps> = ({
  index,
  date,
  title,
  description,
}) => {
  return (
    <Card className="mt-3 w-full" key={index}>
      <CardContent className="py-3">
        <div className="flex justify-between">
          <div>
            <p>{date}</p>
            <h1 className="text-lg font-bold">{title}</h1>
            <p>{description}</p>
          </div>
          <div className="mt-3 flex items-center justify-end sm:mt-0 sm:justify-center">
            <FaRegTrashAlt size={30} className="text-red-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  // Example data array for dynamic rendering
  const cardMockData = [
    {
      date: '2024/12/12',
      title: 'Grupo de amigos',
      description: 'grupo do projeto xxxxxx',
    },
    {
      date: '2024/12/13',
      title: 'Projeto Y',
      description: 'grupo do projeto yyyyyy',
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4">
      <header className="flex items-center justify-between rounded-md bg-slate-400 p-3 shadow-md">
        <p className="text-sm font-medium text-white">2024/12/12</p>
        <div className="text-white">Menu</div>
      </header>

      <Card className="mx-auto mt-5 w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <CardContent>
          {cardMockData.map((card, index) => (
            <CardItem
              key={index}
              index={index}
              date={card.date}
              title={card.title}
              description={card.description}
            />
          ))}
        </CardContent>
      </Card>

      <div className="mt-10 flex w-full justify-center">
        <Button className="h-10 w-40 sm:w-64" variant="outline">
          <FaPlus className="mr-2" /> Add New
        </Button>
      </div>
    </div>
  )
}
