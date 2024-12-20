import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux/";
import { AppDispatch, RootState } from "./index";

export const UseDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
