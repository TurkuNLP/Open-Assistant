import { TaskCategory, TaskInfo, TaskType, TaskUpdateType } from "src/types/Task";

export const TaskCategoryLabels: { [key in TaskCategory]: string } = {
  [TaskCategory.Random]: "grab_a_task",
  [TaskCategory.Create]: "create",
  [TaskCategory.Evaluate]: "evaluate",
  [TaskCategory.Label]: "label",
};

export const TaskInfos: TaskInfo[] = [
  // general/random
  {
    id: "random",
    category: TaskCategory.Random,
    pathname: "/tasks/random",
    help_link: "https://github.com/TurkuNLP/Open-Assistant/wiki",
    type: TaskType.random,
    update_type: TaskUpdateType.Random,
  },
  // create
  {
    id: "create_initial_prompt",
    category: TaskCategory.Create,
    pathname: "/create/initial_prompt",
    help_link:
      "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#aloitusviestien-tai-k%C3%A4ytt%C3%A4j%C3%A4n-vastauksien-luominen",
    type: TaskType.initial_prompt,
    update_type: TaskUpdateType.TextReplyToMessage,
  },
  {
    id: "reply_as_user",
    category: TaskCategory.Create,
    pathname: "/create/user_reply",
    help_link:
      "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#aloitusviestien-tai-k%C3%A4ytt%C3%A4j%C3%A4n-vastauksien-luominen",
    type: TaskType.prompter_reply,
    update_type: TaskUpdateType.TextReplyToMessage,
  },
  {
    id: "reply_as_assistant",
    category: TaskCategory.Create,
    pathname: "/create/assistant_reply",
    help_link: "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#avustajan-vastauksien-luominen",
    type: TaskType.assistant_reply,
    update_type: TaskUpdateType.TextReplyToMessage,
  },
  // evaluate
  {
    id: "rank_user_replies",
    category: TaskCategory.Evaluate,
    pathname: "/evaluate/rank_user_replies",
    help_link:
      "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#aloitusviestien-tai-k%C3%A4ytt%C3%A4j%C3%A4n-vastauksien-luominen",
    // doesn't really match the task but neither did the original
    type: TaskType.rank_prompter_replies,
    update_type: TaskUpdateType.MessageRanking,
  },
  {
    id: "rank_assistant_replies",
    category: TaskCategory.Evaluate,
    pathname: "/evaluate/rank_assistant_replies",
    help_link:
      "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#avustajan-vastausten-asettaminen-paremmuusj%C3%A4rjestykseen",
    type: TaskType.rank_assistant_replies,
    update_type: TaskUpdateType.MessageRanking,
  },
  {
    id: "rank_initial_prompts",
    category: TaskCategory.Evaluate,
    pathname: "/evaluate/rank_initial_prompts",
    help_link:
      "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#aloitusviestien-tai-k%C3%A4ytt%C3%A4j%C3%A4n-vastauksien-luominen",
    // doesn't really match the task but neither did the original
    type: TaskType.rank_initial_prompts,
    update_type: TaskUpdateType.MessageRanking,
  },
  // label (full)
  {
    id: "label_initial_prompt",
    category: TaskCategory.Label,
    pathname: "/label/label_initial_prompt",
    help_link:
      "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#arvioi-aloitusviesti-tai-k%C3%A4ytt%C3%A4j%C3%A4n-vastaus",
    type: TaskType.label_initial_prompt,
    mode: "full",
    update_type: TaskUpdateType.TextLabels,
  },
  {
    id: "label_prompter_reply",
    category: TaskCategory.Label,
    pathname: "/label/label_prompter_reply",
    help_link:
      "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#arvioi-aloitusviesti-tai-k%C3%A4ytt%C3%A4j%C3%A4n-vastaus",
    type: TaskType.label_prompter_reply,
    mode: "full",
    update_type: TaskUpdateType.TextLabels,
  },
  {
    id: "label_assistant_reply",
    category: TaskCategory.Label,
    pathname: "/label/label_assistant_reply",
    help_link: "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#arvioi-avustajan-vastaus",
    type: TaskType.label_assistant_reply,
    mode: "full",
    update_type: TaskUpdateType.TextLabels,
  },
  // label (simple)
  {
    id: "classify_initial_prompt",
    category: TaskCategory.Label,
    pathname: "/label/label_initial_prompt",
    help_link:
      "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#aloitusviestien-tai-k%C3%A4ytt%C3%A4j%C3%A4n-vastauksien-luominen",
    type: TaskType.label_initial_prompt,
    mode: "simple",
    update_type: TaskUpdateType.TextLabels,
  },
  {
    id: "classify_prompter_reply",
    category: TaskCategory.Label,
    pathname: "/label/label_prompter_reply",
    help_link:
      "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#aloitusviestien-tai-k%C3%A4ytt%C3%A4j%C3%A4n-vastauksien-luominen",
    type: TaskType.label_prompter_reply,
    mode: "simple",
    update_type: TaskUpdateType.TextLabels,
  },
  {
    id: "classify_assistant_reply",
    category: TaskCategory.Label,
    pathname: "/label/label_assistant_reply",
    help_link: "https://github.com/TurkuNLP/Open-Assistant/wiki/Ohjeistus#arvioi-avustajan-vastaus",
    type: TaskType.label_assistant_reply,
    mode: "simple",
    update_type: TaskUpdateType.TextLabels,
  },
];
