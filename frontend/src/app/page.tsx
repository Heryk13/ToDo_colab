import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="w-full">
      <header className="flex justify-between bg-slate-400 p-3">
        <p>2024/12/12</p>
        <div>aaaaaa</div>
      </header>
      <Card className="mx-auto mt-5 h-[700px] w-[550px]">
        <CardContent>
          <Card className="mt-5 w-full">
            <CardContent className="w-full py-3">
              <div className="flex h-full w-full justify-between">
                <div>
                  <p>2024/12/12</p>
                  <h1>
                    <b>Grupo de amigos</b>
                  </h1>
                  <p>grupo do projeto xxxxxx</p>
                </div>
                <div className="flex items-center">
                  <FaRegTrashAlt size={50} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-3 w-full">
            <CardContent className="w-full py-3">
              <div className="flex w-full justify-between">
                <div>
                  <p>2024/12/12</p>
                  <h1>
                    <b>Grupo de amigos</b>
                  </h1>
                  <p>grupo do projeto xxxxxx</p>
                </div>
                <div className="flex items-center">
                  <FaRegTrashAlt size={50} />
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <div className="mt-10 flex w-full justify-center">
        <Button className="h-[40px] w-[300px]" variant="outline">
          <FaPlus />
        </Button>
      </div>
    </div>
  )
}
