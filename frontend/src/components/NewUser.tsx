import { FC } from "react";

interface NewUserProps {
    name: string
}

const NewUser: FC<NewUserProps> = ({name}) => {
    return ( 
        <div className="new-user">
            ►►<span>{name}</span>в чаті.
        </div>
     );
}
 
export default NewUser;