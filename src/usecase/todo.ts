import { Value as UseAuthReturn } from '@/service/auth'
import * as TodoService from '@/service/todo'
import { AddTodo, DeleteTodo, ToggleTodoCompleted, UpdateTodoContent } from '@/ui/pages'

export const useAddTodo = ({ uid }: UseAuthReturn) => {
  const addTodo: AddTodo = async (v) => {
    await TodoService.createTodo({ content: v.content, userId: uid })
  }
  return addTodo
}

export const useToggleTodoCompleted = () => {
  const toggleTodoCompleted: ToggleTodoCompleted = (todo) => async () => {
    await TodoService.updateTodo(todo.id, { completed: !todo.completed })
  }
  return toggleTodoCompleted
}

export const useUpdateTodoContent = () => {
  const updateTodoContent: UpdateTodoContent = (todo) => async (v) => {
    await TodoService.updateTodo(todo.id, { content: v.content })
  }
  return updateTodoContent
}

export const useDeleteTodo = () => {
  const deleteTodo: DeleteTodo = (todo) => async () => {
    await TodoService.deleteTodo(todo.id)
  }
  return deleteTodo
}
