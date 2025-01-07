import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full">
      <header className="flex justify-between p-3 bg-slate-400">
        <p>2024/12/12</p>
        <div>
          aaaaaa
        </div>
      </header>
      <Card className="w-[550px] h-[700px] mx-auto mt-5">
        <CardContent>
            <Card className="w-full mt-5">
              <CardContent className="w-full py-3">
                <div className="flex w-full justify-between h-full">
                  <div>
                    <p>2024/12/12</p>
                    <h1><b>Grupo de amigos</b></h1>
                    <p>grupo do projeto xxxxxx</p>
                  </div>
                  <div className="flex items-center">
                    <FaRegTrashAlt size={50} />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full mt-3">
              <CardContent className="w-full py-3">
                <div className="flex w-full justify-between">
                  <div>
                    <p>2024/12/12</p>
                    <h1><b>Grupo de amigos</b></h1>
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
      <div className="w-full flex justify-center mt-10">
        <Button className="w-[300px] h-[40px]" variant="outline">
          <FaPlus />
        </Button>
      </div>
    </div>
  );
}
