export type Timeline = {
  messages: Message[];
};

export type Message = {
  text: string;
  author: string;
  publishedAt: string;
};
