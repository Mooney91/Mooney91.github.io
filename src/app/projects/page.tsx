export default function Page() {
    return (

        <>
        <h2>Projects</h2>

        <div className="flex flex-col justify-center items-center mb-5">
            <svg className="size-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M343.9 213.4L245.3 312l65.4 65.4c7.9 7.9 11.1 19.4 8.4 30.3s-10.8 19.6-21.5 22.9l-256 80c-11.4 3.5-23.8 .5-32.2-7.9S-2.1 481.8 1.5 470.5l80-256c3.3-10.7 12-18.9 22.9-21.5s22.4 .5 30.3 8.4L200 266.7l98.6-98.6c-14.3-14.6-14.2-38 .3-52.5l95.4-95.4c26.9-26.9 70.5-26.9 97.5 0s26.9 70.5 0 97.5l-95.4 95.4c-14.5 14.5-37.9 14.6-52.5 .3z"/>
            </svg>
            <h3 className="text-2xl font-bold">Untitled Garden Automation App</h3>
            <p>As a keen gardener I needed a way of keeping track of the plants and vegetables that I have planted and when to maintain them - this is the solution.</p>
        </div>

        <div className="flex flex-col justify-center items-center mb-5">
            <a href="https://github.com/Mooney91/database-speed" className="flex flex-col justify-center items-center">
                <svg className="size-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                    <path d="M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"/>
                </svg>
                <h3 className="text-2xl font-bold">Database Connection Speed Test</h3>
                <p>This technical study compares the speed of Node.js, PHP, and Python when connecting to a database and executing simple queries. </p>
            </a>
        </div>

        <div className="flex flex-col justify-center items-center mb-5">
            <a href="https://github.com/Mooney91/layer-performance" className="flex flex-col justify-center items-center">
            <svg className="size-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/>
            </svg>
                <h3 className="text-2xl font-bold">Where&#39;s the logic?</h3>
                <p>This project is in connection with my thesis project at BTH. This is a comparative study of the performance of business logic between the Data and Application Layers of a Three-Tier System.</p>
            </a>
        </div>

        </>
    )
  }