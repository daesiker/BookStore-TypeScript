import { useRouteError } from "react-router-dom";

interface RouteError {
    stateText?:string;
    message?:string;
}


function Error() {
    const error = useRouteError() as RouteError

    return (
        <div>
            <h1>오류가 발생했습니다.</h1>
            <p>다음과 같은 오류가 발생했습니다.</p>
            <p>{error.stateText || error.message}</p>
        </div>
    )
}

export default Error;