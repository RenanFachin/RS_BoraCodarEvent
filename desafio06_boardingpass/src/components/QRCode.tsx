import QRCodeImg from '../assets/QR Code.png'

interface QrCodeProps {
    boardingGroup: string;
}

export function QRCode({ boardingGroup }: QrCodeProps) {
    return (
        <div className='flex flex-col items-center'>
            <img src={QRCodeImg} alt="" className='w-40 h-40' />
            <span>Grupo de embarque: {boardingGroup}</span>
        </div>
    )
}