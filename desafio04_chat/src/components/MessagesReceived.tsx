import clsx from "clsx";

interface MessagesProps {
    user: string;
    time: string;
    message: string;
}

export function MessagesReceived({ user, message, time }: MessagesProps) {
    return (
        <div className={clsx(
            "flex flex-col gap-3 w-full mt-8 self-end items-end",
        )}
        >
            <div className="w-1/2">
                <div className="w-fit">
                    <span className="text-xs">
                        {user} - {time}
                    </span>
                </div>

                <div className={clsx(
                    "p-3 h-min-[56px] bg-card-received rounded-l-lg rounded-tr-lg",

                )}
                >
                    <p className="text-xs">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}