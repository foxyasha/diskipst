import {useMutation} from "@tanstack/react-query";
import {AuthRequest} from "../../../../data/user";
import Cookies from "js-cookie";
import ECookieValues from "../../../common/enum";
import {useNavigate} from "react-router-dom";

const useLoginLogic = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: AuthRequest,
        onSuccess: (data) => {
            Cookies.set(ECookieValues.ACCESS_TOKEN, data.token, {expires: 1})
            navigate('/disk')
        }
    })
}

export {useLoginLogic}