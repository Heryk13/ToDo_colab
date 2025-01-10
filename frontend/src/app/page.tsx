import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'

type ListTaskRes = {
  date: string
  title: string
  description: string
}

const formatDate = (date: string): string => {
  const dateObj = new Date(date)
  return `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')} ${String(
    dateObj.getHours(),
  ).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}`
}

const CardItem: React.FC<ListTaskRes> = ({ date, title, description }) => (
  <Card className="mt-3 w-full">
    <CardContent className="py-3">
      <div className="flex justify-between">
        <div>
          <p>{formatDate(date)}</p>
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

async function fetchTasks(): Promise<ListTaskRes[]> {
  const taskListUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL_SSR}/api/list_task`

  const response = await fetch(taskListUrl, { cache: 'no-store' }) // Disable caching if data is dynamic
  if (!response.ok) {
    console.error('Failed to fetch tasks:', response.statusText)
    return []
  }

  return response.json()
}

export default async function Home() {
  const tasks = await fetchTasks()

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4">
      <header className="flex items-center justify-between rounded-md bg-slate-400 p-3 shadow-md">
        <p className="text-sm font-medium text-white">2024/12/12</p>
        <div className="text-white">Menu</div>
      </header>

      <Card className="mx-auto mt-5 w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <CardContent>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <CardItem
                key={`${task.title}-${index}`}
                date={task.date}
                title={task.title}
                description={task.description}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No tasks available.</p>
          )}
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
