import { FC } from "react";

interface AvatarProps {
    avatar: string,
    name?: string,
}

const Avatar: FC<AvatarProps> = ({avatar, name}) => {
    return ( 
        <div className="avatar-wrapper">
            <div className={"avatar avatar-" + avatar}></div>
            {name
            ? <span className="avatar-name">{name}</span>
            : ''
            }
        </div>
     );
}
 
export default Avatar;