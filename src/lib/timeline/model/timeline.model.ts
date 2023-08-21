export type Timeline = {
  user: string;
  messages: Message[];
};

export type Message = {
  text: string;
  author: string;
  publishedAt: string;
};
