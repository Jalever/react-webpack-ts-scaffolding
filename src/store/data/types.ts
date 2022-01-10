import * as CONSTANTS from "@/constants/index"

export interface Message {
  user: string
  message: string
  timestamp: number
}

export interface SendMessageAction {
  type: typeof CONSTANTS.SEND_MESSAGE,
  payload: Message
}

export interface DeleteMessageAction {
  type: typeof CONSTANTS.DELETE_MESSAGE
  payload: {
    timestamp: number
  }
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;

export interface ChatState {
  messages: Message[]
}