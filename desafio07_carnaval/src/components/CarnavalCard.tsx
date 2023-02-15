import { CiLocationOn } from 'react-icons/ci'


interface CarnavalCardProps {
   displayName: string;
   description: string;
   city: string;
   image: string;
}

export function CarnavalCard({ city, description, displayName, image }: CarnavalCardProps) {
   return (
      <div className="w-[384px] h-[323px] border border-stroke rounded-xl flex flex-col">
         <div>
            <img
               className="rounded-t-xl"
               src={image}
               alt=""
            />
         </div>

         <div className=" h-full ml-4 my-4 mr-1 flex flex-col gap-4">
            <h2 className="text-title font-bold text-xl leading-tight">
               {displayName}
            </h2>

            <p className="text-black text-base leading-relaxed">
               {description}
            </p>

            <span className="text-black text-base opacity-75 flex mr-2">
               <CiLocationOn
                  className=''
                  color='#E45858'
                  size={24}
               />
               {city}
            </span>
         </div>
      </div>
   )
}