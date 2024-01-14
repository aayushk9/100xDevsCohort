import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


// week 7.2 counter app using recoil
// if current value is even return it is even statemnet
export default function App3() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}
function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer(){
  const count = useRecoilValue(countAtom);
  const isEven2 = useRecoilValue(evenSelector)
  const isEven = useMemo(() => {
    return count % 2 == 0
  }, [count])

  return <div>
    if(isEven){
      <div>It is even</div>
    }
  </div>
}

function Buttons() {
// setCount(c => c + 1)
const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {
      setCount(count => count+ 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}
