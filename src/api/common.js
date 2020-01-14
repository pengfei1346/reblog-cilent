import request from '@/http/request'

//获取菜单列表
export const getMenus = () => request({ url: '/menus', method: 'get' })
