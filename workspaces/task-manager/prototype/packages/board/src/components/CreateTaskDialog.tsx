import React, { useState } from 'react'
import {
  Dialog, Button, Input, Textarea, VStack, HStack, Text, Field, RadioGroup, NativeSelect
} from '@chakra-ui/react'
import type { Task, User, Priority } from '../types'

interface Props {
  users: User[]
  open: boolean
  onClose: () => void
  onSubmit: (task: Omit<Task, 'id' | 'createdAt'>) => void
}

export function CreateTaskDialog({ users, open, onClose, onSubmit }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [assigneeId, setAssigneeId] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState<Priority>('medium')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) { setError('Title is required'); return }
    setError('')
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 600))
    onSubmit({
      title: title.trim(),
      description,
      status: 'todo',
      priority,
      assigneeId: assigneeId || users[0].id,
      projectId: 'p1',
      labels: [],
      dueDate: dueDate || new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10),
      updatedAt: new Date().toISOString(),
    })
    setTitle(''); setDescription(''); setAssigneeId(''); setDueDate(''); setPriority('medium')
    setSubmitting(false)
    onClose()
  }

  return (
    <Dialog.Root open={open} onOpenChange={e => !e.open && onClose()} size="md">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header borderBottomWidth="1px">
            <Dialog.Title>Create Task</Dialog.Title>
            <Dialog.CloseTrigger asChild>
              <Button size="sm" variant="ghost" position="absolute" right={3} top={3}>✕</Button>
            </Dialog.CloseTrigger>
          </Dialog.Header>

          <form onSubmit={handleSubmit}>
            <Dialog.Body py={4}>
              <VStack gap={4} align="stretch">
                <Field.Root invalid={!!error}>
                  <Field.Label fontSize="sm">Title <Field.RequiredIndicator /></Field.Label>
                  <Input
                    placeholder="Task title"
                    value={title}
                    onChange={e => { setTitle(e.target.value); setError('') }}
                    variant="outline"
                    autoFocus
                  />
                  {error && <Field.ErrorText>{error}</Field.ErrorText>}
                </Field.Root>

                <Field.Root>
                  <Field.Label fontSize="sm">Description</Field.Label>
                  <Textarea
                    placeholder="Add a description..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows={3}
                    resize="vertical"
                  />
                </Field.Root>

                <HStack gap={3}>
                  <Field.Root flex={1}>
                    <Field.Label fontSize="sm">Assignee</Field.Label>
                    <NativeSelect.Root>
                      <NativeSelect.Field value={assigneeId} onChange={e => setAssigneeId(e.target.value)}>
                        <option value="">Select assignee...</option>
                        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                      </NativeSelect.Field>
                      <NativeSelect.Indicator />
                    </NativeSelect.Root>
                  </Field.Root>

                  <Field.Root flex={1}>
                    <Field.Label fontSize="sm">Due Date <Text as="span" fontSize="xs" color="fg.muted">(no DatePicker in Chakra v3)</Text></Field.Label>
                    <Input
                      type="date"
                      value={dueDate}
                      onChange={e => setDueDate(e.target.value)}
                      variant="outline"
                    />
                  </Field.Root>
                </HStack>

                <Field.Root>
                  <Field.Label fontSize="sm">Priority</Field.Label>
                  <RadioGroup.Root value={priority} onValueChange={e => setPriority(e.value as Priority)}>
                    <HStack gap={4}>
                      {(['low', 'medium', 'high', 'critical'] as Priority[]).map(p => (
                        <RadioGroup.Item key={p} value={p}>
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText fontSize="sm" textTransform="capitalize">{p}</RadioGroup.ItemText>
                        </RadioGroup.Item>
                      ))}
                    </HStack>
                  </RadioGroup.Root>
                </Field.Root>
              </VStack>
            </Dialog.Body>

            <Dialog.Footer borderTopWidth="1px">
              <Button variant="ghost" size="sm" onClick={onClose} type="button">Cancel</Button>
              <Button
                colorPalette="blue"
                size="sm"
                type="submit"
                loading={submitting}
                loadingText="Creating..."
              >
                Create Task
              </Button>
            </Dialog.Footer>
          </form>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
