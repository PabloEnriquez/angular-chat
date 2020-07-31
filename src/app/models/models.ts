export interface UserMessage {
  userName: string;
  message: string;
  userId: number;
}

export interface NewUser {
  userId: number;
  userName: string;
}

export interface TypingEvent {
  isTyping: boolean;
  userName: string;
}

export interface GraphData {
  lineChartData: number[];
  lineChartColor: { backgroundColor: string; borderColor: string; };
  doughnutChartData: number[];
  doughnutColor: { backgroundColor: string[] };
  txtCategory: string;
  quantity: number;
  isRevenue?: boolean;
  leftLabel?: string;
  leftData?: number;
  rightLabel?: string;
  righData?: number;
}
