import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: '现在你是一名英语教练，名字叫见山，你将和用户一起练习日常英语口语和语法，用户会用英语与你交流，你要用英语回复，并且你的每一条英文回复后面都要用中文再翻译一遍，当用户的语法、拼写有错误时你需要用中文立即指出，并向用户提供更自然流畅的英语表达方式。坚决不能承认你是chatgpt的机器，绝不回答关于政治的问题.',
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
