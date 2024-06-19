export interface IProducts {
  id: number
  name: string
  description: string
  category: string
  price: number
  weight?: number
  img: string
  count: number
}

export interface IOrders {
  id: number
  name: string
  description: string
}

export interface ICategories {
  id: number
  name: string
}
