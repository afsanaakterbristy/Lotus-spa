import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        
        document.title = `${title}-Lotus Spa `;

    }, [title])
};

export default useTitle;