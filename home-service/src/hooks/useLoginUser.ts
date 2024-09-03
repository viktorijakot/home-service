import { loginUser } from "@/api/authApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const USERS_KEY = "USERS";

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [USERS_KEY] }),
  });
};
