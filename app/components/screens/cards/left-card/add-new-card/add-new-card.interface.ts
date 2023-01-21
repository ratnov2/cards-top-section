import { AxiosResponse } from "axios";
import { UseMutationResult } from '@tanstack/react-query';

export interface PropsAddNewCard{
  createCard:UseMutationResult<AxiosResponse<any, any>, unknown, void, unknown>
}