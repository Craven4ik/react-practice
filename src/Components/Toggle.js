import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {toggleUpdateButton} from "../redux/actions";

export default function Toggle() {
    const { updateButton } = useSelector((state) => state);
    const dispatch = useDispatch();
    const setUpdateButton = useCallback(() => {
        dispatch(toggleUpdateButton);
        }, [dispatch]);

    return (
        <div>
            <h4>Toggle</h4>
            <input type="checkbox" checked={updateButton} value={updateButton} onChange={setUpdateButton}/>
            <span>Update Button</span>
            <div className="btn__wrap">
                <button className= {updateButton ? "shadow__btn" : "btn"}>
                    button
                </button>
            </div>
        </div>
    );
}