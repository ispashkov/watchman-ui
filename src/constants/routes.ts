export interface RouteInterface {
  path: string,
  title: string,
  exact: boolean
}

export const home: RouteInterface = {
  path: '/',
  title: 'Главная',
  exact: true
};

export const analysis: RouteInterface = {
  path: '/analysis',
  title: 'Анализ данных',
  exact: false
};

export const settings: RouteInterface = {
  path: '/settings',
  title: 'Настройка операций',
  exact: false
};

export const users: RouteInterface = {
  path: '/users',
  title: 'Пользователи',
  exact: false
};

export const admin: RouteInterface = {
  path: '/admin',
  title: 'Администрирование',
  exact: false
};

export const auth: RouteInterface = {
  path: '/auth',
  title: 'Авторизация',
  exact: false
};
