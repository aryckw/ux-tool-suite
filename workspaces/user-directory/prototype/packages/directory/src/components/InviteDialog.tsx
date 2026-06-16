import React, { useState } from 'react'
import {
  Dialog,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Field,
  RadioGroup,
  Alert,
} from '@chakra-ui/react'
import type { Role } from '../types'

interface InviteDialogProps {
  open: boolean
  onClose: () => void
}

type InviteState = 'idle' | 'submitting' | 'success' | 'error'

const ROLES: Array<{ value: Role; label: string; description: string }> = [
  { value: 'Member', label: 'Member', description: 'Standard access' },
  { value: 'Manager', label: 'Manager', description: 'Can manage projects and team' },
  { value: 'Viewer', label: 'Viewer', description: 'Read-only access' },
]

export function InviteDialog({ open, onClose }: InviteDialogProps) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role>('Member')
  const [emailError, setEmailError] = useState('')
  const [state, setState] = useState<InviteState>('idle')

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleClose = () => {
    setEmail('')
    setRole('Member')
    setEmailError('')
    setState('idle')
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !EMAIL_RE.test(email)) {
      setEmailError('Please enter a valid email address.')
      return
    }
    setEmailError('')
    setState('submitting')
    await new Promise((r) => setTimeout(r, 800))
    setState('success')
    setTimeout(() => handleClose(), 2000)
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => !e.open && handleClose()}
      size="sm"
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header borderBottomWidth="1px">
            <Dialog.Title>Invite Member</Dialog.Title>
            <Dialog.CloseTrigger asChild>
              <Button size="sm" variant="ghost" position="absolute" right={3} top={3}>
                ✕
              </Button>
            </Dialog.CloseTrigger>
          </Dialog.Header>

          {state === 'success' ? (
            <Dialog.Body py={8}>
              <VStack gap={4} align="center" textAlign="center">
                <Alert.Root status="success" variant="subtle" borderRadius="xl">
                  <Alert.Indicator />
                  <Alert.Description>
                    Invite sent! <strong>{email}</strong> will receive an email shortly.
                  </Alert.Description>
                </Alert.Root>
              </VStack>
            </Dialog.Body>
          ) : (
            <form onSubmit={handleSubmit}>
              <Dialog.Body py={5}>
                <VStack gap={5} align="stretch">
                  {/* Email field */}
                  <Field.Root invalid={!!emailError}>
                    <Field.Label fontSize="sm">
                      Email address <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                      type="email"
                      placeholder="colleague@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailError('')
                      }}
                      variant="outline"
                      autoFocus
                    />
                    {emailError && <Field.ErrorText>{emailError}</Field.ErrorText>}
                  </Field.Root>

                  {/* Role selection */}
                  <Field.Root>
                    <Field.Label fontSize="sm">
                      Role <Field.RequiredIndicator />
                    </Field.Label>
                    <RadioGroup.Root
                      value={role}
                      onValueChange={(e) => setRole(e.value as Role)}
                    >
                      <VStack gap={2} align="stretch">
                        {ROLES.map((r) => (
                          <RadioGroup.Item
                            key={r.value}
                            value={r.value}
                            display="flex"
                            alignItems="center"
                            gap={3}
                            p={2}
                            borderRadius="md"
                            _hover={{ bg: 'bg.subtle' }}
                            cursor="pointer"
                          >
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>
                              <Text fontSize="sm" fontWeight="medium">
                                {r.label}
                              </Text>
                              <Text fontSize="xs" color="fg.muted">
                                {r.description}
                              </Text>
                            </RadioGroup.ItemText>
                          </RadioGroup.Item>
                        ))}
                      </VStack>
                    </RadioGroup.Root>
                  </Field.Root>

                  {state === 'error' && (
                    <Alert.Root status="error" variant="subtle" borderRadius="lg">
                      <Alert.Indicator />
                      <Alert.Description>
                        Something went wrong. Please try again.
                      </Alert.Description>
                    </Alert.Root>
                  )}
                </VStack>
              </Dialog.Body>

              <Dialog.Footer borderTopWidth="1px">
                <HStack gap={3} w="full">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleClose}
                    type="button"
                    flex={1}
                  >
                    Cancel
                  </Button>
                  <Button
                    colorPalette="blue"
                    size="sm"
                    type="submit"
                    loading={state === 'submitting'}
                    loadingText="Sending..."
                    flex={1}
                  >
                    Send Invite
                  </Button>
                </HStack>
              </Dialog.Footer>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
