export enum Gender {
  'man' = 'man',
  'woman' = 'woman'
}
export interface UserInfoType {
  name: string
  password: string
  gender: Gender
  age: number
  isMarry?: boolean
  birthDate: Date
  createdAt?: string
  updatedAt?: string
  allowDrinkUsers?: () => any[]
}
