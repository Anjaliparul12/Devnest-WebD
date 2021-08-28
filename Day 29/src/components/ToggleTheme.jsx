import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../actions';
const ToggleTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme)
    return (
        <div className="toggle-theme">
            <button className={theme ? "btn btn-light" : "btn btn-dark"}
                onClick={() => dispatch(toggleTheme())}>
                {theme ? "Dark" : "Light"}
            </button>
        </div>
    )
}

export default ToggleTheme;