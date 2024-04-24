
const Icon = ({ name, size }) => {
    const icons = [
        {
            name_icon: 'chat',
            el: <svg fill="#a7a7a7" height={size} width={size} version="1.1" id="Capa_1" 
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 60 60" xmlSpace="preserve" stroke="#ccc">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z"></path> 
                        </g>
                </svg>            
        },
        {
            name_icon: 'contact',
            el: <svg fill="#a7a7a7" width={size} height={size} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
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
        },
        {
            name_icon: 'profile',
            el: <svg viewBox="0 0 24 24" fill="none" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path opacity="0.4" d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z" fill="#8a8a8a"></path> <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z" fill="#8a8a8a"></path> <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z" fill="#8a8a8a"></path> 
                    </g>
                </svg>
        },
        {
            name_icon: 'setting',
            el: <svg viewBox="0 0 24 24" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <g id="style=linear"> 
                            <g id="setting"> 
                                <path id="vector" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#a7a7a7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path id="vector_2" d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#a7a7a7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> 
                            </g> 
                        </g> 
                    </g>
                </svg>
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