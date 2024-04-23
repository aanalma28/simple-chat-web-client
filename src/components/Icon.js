
const Icon = ({ name, size }) => {
    const icons = [
        {
            name_icon: 'chat',
            el: <div>
                <svg fill="#ccc" height={size} width={size} version="1.1" id="Capa_1" 
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 60 60" xmlSpace="preserve" stroke="#ccc">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z"></path> 
                        </g>
                </svg>
            </div>
        },
        {
            name_icon: 'contact',
            el: <div>
                <svg fill="#ccc" width={size} height={size} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 961.6 961.6" xmlSpace="preserve" 
                    stroke="#ccc">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <g> 
                                <path d="M901.6,66.4h-58c0,0.8,0,1.5,0,2.3v229.7h58c33.1,0,60-26.9,60-60v-112C961.6,93.3,934.699,66.4,901.6,66.4z"></path> <path d="M961.6,539.4v-112c0-33.1-26.9-60-60-60h-58v232h58C934.699,599.4,961.6,572.5,961.6,539.4z"></path> <path d="M843.6,892.9c0,2.5-0.1,5-0.199,7.5H901.6c33.1,0,60-26.9,60-60v-112c0-33.1-26.9-60-60-60h-58V892.9z"></path> <path d="M742.9,11.9c-6.1-2.1-12.5-3.2-19.301-3.2h-537v3.2v941h537c30.6,0,55.801-22.9,59.5-52.5c0.301-2.5,0.5-5,0.5-7.5V668.4 v-69v-232v-69V68.7c0-0.8,0-1.5-0.1-2.3C782.6,41,765.9,19.7,742.9,11.9z M463.5,463.4H312.9c-22.1,0-40-17.9-40-40s17.9-40,40-40 h150.5c22.1,0,40,17.9,40,40S485.6,463.4,463.5,463.4z M614,281.2H312.9c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40H614 c22.1,0,40,17.9,40,40C654,263.3,636.1,281.2,614,281.2z"></path> <path d="M40.7,11.9C17,19.9,0,42.3,0,68.7v824.2c0,33.1,26.9,60,60,60h56.6v-941V8.7H60C53.2,8.7,46.7,9.8,40.7,11.9z"></path> 
                            </g> 
                        </g>
                </svg>
            </div>
        }
    ]

    const findIcons = icons.find(({name_icon}) => name_icon === name)
    
    if(findIcons){
        return findIcons.el
    }
    else{
        return null
    }
}

export default Icon