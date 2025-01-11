import React, { useState } from 'react'
import assets from '../assets/assets'
import axios from 'axios';
import { Sun, Cloud, CloudRain, Snowflake, CloudLightning, Wind } from 'lucide-react'; // Importando o ícone de CloudLightning para tempestade

const Hero = () => {
    const [location, setLocation] = useState("")
    const [data, setData] = useState({})
    const [error, setError] = useState("")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c22f100142ceda683a808dffa8cf3225`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url)
                .then(response => {
                    setData(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Erro ao buscar os dados:', error);
                    setError(`A localização ${location} não existe, tente novamente.`);
                });
            setLocation("")
            setError("")
        }
    };

    // Função para mapear as condições para ícones
    const getWeatherIcon = (weatherMain) => {
        switch (weatherMain) {
            case 'Clear':
                return <Sun color='yellow' size={48} />;
            case 'Clouds':
                return <Cloud size={48} />;
            case 'Rain':
                return <CloudRain size={48} />;
            case 'Snow':
                return <Snowflake size={48} />;
            case 'Thunderstorm':
                return <CloudLightning size={48} />; // Usando CloudLightning para tempestade
            case 'Mist':
            case 'Haze':
            case 'Fog':
                return <Cloud size={48} />;
            case 'Wind':
                return <Wind size={48} />;
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Gradiente de sobreposição */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center -z-20"
                style={{ backgroundImage: `url(${assets.fundo1})` }}
            >
            </div>

            <div className='w-full h-screen text-white container flex flex-col mx-auto justify-between '>
                <div className='w-full flex flex-col gap-5 justify-center items-center mt-10'>
                    <input
                        className='text-center p-3 rounded text-black border-none text-sm focus:outline-none focus:border-none '
                        type="text"
                        placeholder='Digite uma cidade'
                        value={location}
                        onKeyDown={searchLocation}
                        onChange={(event) => setLocation(event.target.value)}
                    />

                    {error && (
                        <div className="text-red-500 p-2 w-3/4 text-center text-sm">
                            {error}
                        </div>
                    )}
                </div>

                <div className='w-full h-[30rem] flex justify-between'>
                    <div className='mt-60 w-full flex justify-between px-5'>
                        <div>
                            <h1 className='text-3xl '>{data.name}</h1>
                            {data.main ? <p className='text-[3rem] font-semibold'>{(data.main.temp - 273.15).toFixed(1)} °C</p> : null}
                        </div>
                        <div>
                            {data.weather ? <p>{getWeatherIcon(data.weather[0].main)}</p> : null}
                        </div>
                    </div>
                </div>

                <div className="w-full h-[30rem] relative">
                    <div className="flex gap-10 w-auto justify-center items-center absolute inset-x-0 bottom-12 px-6">
                        <div className="bg-gray-500/50 p-5 px-10 rounded flex gap-12">
                            <div className='flex flex-col'>
                                {data.main ? (
                                    <>
                                        <p className='font-bold text-lg'>{(data.main.feels_like - 273.15).toFixed(1)} °C</p>
                                        <p>Sensação Térmica</p>
                                    </>
                                ) : (
                                    <>
                                        <p className='font-bold text-lg'>-</p>
                                        <p>Sensação Térmica</p>
                                    </>
                                )}
                            </div>

                            <div className='flex flex-col'>
                                {data.main ? (
                                    <>
                                        <p className='font-bold text-lg'>{data.main.humidity}%</p>
                                        <p>Humidade</p>
                                    </>
                                ) : (
                                    <>
                                        <p className='font-bold text-lg'>-</p>
                                        <p>Humidade</p>
                                    </>
                                )}
                            </div>

                            <div className='flex flex-col'>
                                {data.wind ? (
                                    <>
                                         <p className='font-bold text-lg'>{(data.wind.speed * 3.6).toFixed(1)} km/h</p>   {/* formula para converter em Km/h */}
                                        <p>Velocidade do Vento</p>
                                    </>
                                ) : (
                                    <>
                                        <p className='font-bold text-lg'>-</p>
                                        <p>Velocidade do Vento</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
