import { DeleteIcon } from '@chakra-ui/icons'
import { Checkbox, HStack, IconButton, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import { VFC } from 'react'

import { Todo } from '@/domain/todo'
import { TodoEditForm, TodoEditFormProps } from '@/ui/components/TodoForm'

export type TodoTableRowProps = {
  todo: Todo
  onToggleCompleted: () => Promise<void>
  onSubmitEdit: TodoEditFormProps['onSubmit']
  onDelete: () => Promise<void>
}

export const TodoTableRow: VFC<TodoTableRowProps> = ({
  todo,
  onToggleCompleted,
  onSubmitEdit,
  onDelete,
}) => {
  const { isOpen: isEditFormOpen, onOpen: openEditFrom, onClose: closeEditForm } = useDisclosure()

  const handleSubmitEdit: TodoEditFormProps['onSubmit'] = async (v) => {
    await onSubmitEdit(v)
    closeEditForm()
  }

  return (
    <Tr>
      {isEditFormOpen ? (
        <Td p={0}>
          {<TodoEditForm defaultValues={todo} onSubmit={handleSubmitEdit} onBlur={closeEditForm} />}
        </Td>
      ) : (
        <Td>
          <HStack justifyContent="space-between">
            <HStack spacing={4} flex={1}>
              <Checkbox isChecked={todo.completed} onChange={onToggleCompleted} />
              <Text flex={1} onClick={openEditFrom} cursor="pointer">
                {todo.content}
              </Text>
            </HStack>
            <IconButton
              aria-label="delete icon"
              icon={<DeleteIcon />}
              size="sm"
              variant="unstyled"
              onClick={onDelete}
            />
          </HStack>
        </Td>
      )}
    </Tr>
  )
}
