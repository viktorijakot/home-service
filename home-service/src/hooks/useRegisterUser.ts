import { registerUser } from "@/api/authApi";
import { RegisterUser } from "@/types/user";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse } from "react-router-dom";
import { USERS_KEY } from "./useLoginUser";

export const useRegisterUser = (): UseMutationResult<void, ErrorResponse, RegisterUser, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [USERS_KEY] }),
  });
};
