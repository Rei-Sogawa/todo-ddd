import { Box, Container, Heading, Spinner, Table, Tbody, VStack } from '@chakra-ui/react'
import { VFC } from 'react'

import { Todo } from '@/domain/todo'
import { useAuth } from '@/service/auth'
import { useSubscribeTodos } from '@/service/todo'
import { TodoCreateForm, TodoCreateFormProps } from '@/ui/components/TodoForm'
import { TodoTableRow, TodoTableRowProps } from '@/ui/components/TodoTableRow'
import {
  useAddTodo,
  useDeleteTodo,
  useToggleTodoCompleted,
  useUpdateTodoContent,
} from '@/usecase/todo'

export type AddTodo = TodoCreateFormProps['onSubmit']
export type ToggleTodoCompleted = (todo: Todo) => TodoTableRowProps['onToggleCompleted']
export type UpdateTodoContent = (todo: Todo) => TodoTableRowProps['onSubmitEdit']
export type DeleteTodo = (todo: Todo) => TodoTableRowProps['onDelete']

const IndexPage: VFC = () => {
  const { uid } = useAuth()
  const [todos] = useSubscribeTodos()
  const addTodo = useAddTodo({ uid })
  const toggleTodoCompleted = useToggleTodoCompleted()
  const updateTodoContent = useUpdateTodoContent()
  const deleteTodo = useDeleteTodo()

  return (
    <Container py="3">
      <VStack spacing="3">
        <Heading textAlign="center">Todo App</Heading>
        <Box alignSelf="stretch">
          <TodoCreateForm onSubmit={addTodo} />
        </Box>
        {todos ? (
          <Table>
            <Tbody>
              {todos.map((todo) => (
                <TodoTableRow
                  key={todo.id}
                  todo={todo}
                  onToggleCompleted={toggleTodoCompleted(todo)}
                  onSubmitEdit={updateTodoContent(todo)}
                  onDelete={deleteTodo(todo)}
                />
              ))}
            </Tbody>
          </Table>
        ) : (
          <Box pt="4">
            <Spinner size="lg" />
          </Box>
        )}
      </VStack>
    </Container>
  )
}

export default IndexPage
