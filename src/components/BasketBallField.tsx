import React, {useEffect, useState} from "react"
import Clock from "./Clock";
import Button from "./Button";

const defaultCountdown = 24;

export default function BasketBallField(){

    const [countdown, setCountdown] = useState(defaultCountdown);
    const [isCountdownActive, setIsCountdownActive] = useState(false);

    const reset = () => {
        setCountdown(defaultCountdown);
    };

    const pauseOrResumeCountdown = () => {
        setIsCountdownActive((currentState) => !currentState);
    };

    useEffect(() => {
        let timer: number;
        if (countdown === 0) {
            setIsCountdownActive(false)
            return;
        }
        if (isCountdownActive) {
            timer = window.setInterval(() => {
                setCountdown((count) => count - 1);
            }, 1000);
        } else {
            clearInterval(timer!);
        }

        return () => clearInterval(timer);
    }, [isCountdownActive, countdown]);


  return (<>


      <div className="p-4 bg-gray-500  rounded-1xl font-medium m-8">

          <header className="text-4xl font-medium text-white text-center mt-6"> Basket Ball Field </header>


      <main className="grid">


          <section className='mt-16 mb-32'>

              <Clock countdown={countdown} title={'Left Clock'} position={'left'} />

              <Clock countdown={countdown} title={'Right Clock'} position={'right'} />

                  </section>


          <section className="bg-orange-500 w-2/4 p-3 place-self-center text-center ">
              <p className="text-white grid mb-8">Referee Section</p>

              <div className="space-x-8">
                 <Button text={'Reset'} onClick={reset}
                 />

                  <Button text={isCountdownActive ? "Pause" : "Start"} onClick={pauseOrResumeCountdown}
                          bgColor={ isCountdownActive ? "bg-red-800" : "bg-green-800"} hoverBgColor={isCountdownActive ? "bg-red-700" : "bg-green-700"
                          }
                  />


              </div>


          </section>



      </main>
      </div>

  </>)


}