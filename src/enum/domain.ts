export const enum EDomainType {
  document = 1,
  role = 2
}

export enum brandDomainStatusType {
  normal = 'normal',
  refuse = 'refuse',
  pending = 'pending',
  offline = 'offline'
}

export enum brandCreateEditStatusType {
  create = 'create',
  update = 'update'
}

export const enum EDomainLLMType {
  azure = '7e78bce4872633c2',
  wenxin = 'd389c001a3062589',
  minimax = 'c2c4ab7e59416333',
  chatglm2 = '83a97b9669d3532c',
  azure4 = 'e640dbec16b891d9'
}

export const enum EDomainAIGenerateType {
  intro = '简介',
  role = '角色设定',
  welcome = '欢迎语'
}
