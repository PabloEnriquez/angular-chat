export interface UserMessage {
  userName: string;
  message: string;
  isMine?: boolean;
  userId: number;
}

export interface NewUser {
  userId: number;
  userName: string;
}
