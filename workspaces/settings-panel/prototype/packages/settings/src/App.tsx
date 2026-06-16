import React, { useState } from 'react'
import {
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Input,
  Badge,
  Spinner,
  Avatar,
  Card,
  Alert,
  Tabs,
  Field,
  Switch,
} from '@chakra-ui/react'
import {
  mockProfile,
  mockNotifPrefs,
  mockSessions,
  type NotificationPrefs,
} from './data/mock-settings'

// ─── Reusable Switch row ────────────────────────────────────────────────────
function SettingSwitch({
  label,
  description,
  checked,
  onChange,
  disabled,
  saving,
}: {
  label: string
  description?: string
  checked: boolean
  onChange: (v: boolean) => void
  disabled?: boolean
  saving?: boolean
}) {
  return (
    <HStack
      justify="space-between"
      py={3}
      borderBottomWidth="1px"
      borderColor="border"
      _last={{ borderBottom: 'none' }}
    >
      <Box>
        <Text fontSize="sm" fontWeight="medium">{label}</Text>
        {description && (
          <Text fontSize="xs" color="fg.muted">{description}</Text>
        )}
      </Box>
      <HStack gap={2}>
        {saving && <Spinner size="xs" />}
        <Switch.Root
          checked={checked}
          onCheckedChange={e => onChange(e.checked)}
          disabled={disabled}
          size="md"
        >
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>
      </HStack>
    </HStack>
  )
}

// ─── Profile Tab ────────────────────────────────────────────────────────────
function ProfileTab() {
  const [profile, setProfile] = useState(mockProfile)
  const [original] = useState(mockProfile)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const isDirty =
    profile.name !== original.name ||
    profile.bio !== original.bio ||
    profile.timezone !== original.timezone ||
    profile.language !== original.language

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!profile.name.trim()) errs.name = 'Display name is required'
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSaving(true)
    await new Promise(r => setTimeout(r, 800))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <form onSubmit={handleSave}>
      <VStack gap={6} align="stretch" maxW="2xl" mx="auto">
        {/* Avatar section */}
        <HStack
          gap={4}
          align="center"
          p={6}
          bg="bg.subtle"
          borderRadius="xl"
        >
          <Avatar.Root
            size="2xl"
            style={{ backgroundColor: profile.color }}
          >
            <Avatar.Fallback fontSize="2xl">{profile.initials}</Avatar.Fallback>
          </Avatar.Root>
          <VStack align="start" gap={1}>
            <Text fontWeight="semibold">{profile.name}</Text>
            <Text fontSize="sm" color="fg.muted">{profile.email}</Text>
            <Button size="xs" variant="outline" type="button" mt={1}>
              Change Photo
            </Button>
          </VStack>
        </HStack>

        {/* Display Name */}
        <Field.Root invalid={!!errors.name}>
          <Field.Label>
            Display Name <Field.RequiredIndicator />
          </Field.Label>
          <Input
            value={profile.name}
            onChange={e => {
              setProfile(p => ({ ...p, name: e.target.value }))
              setErrors(er => ({ ...er, name: '' }))
            }}
            placeholder="Your display name"
            variant="outline"
          />
          {errors.name && <Field.ErrorText>{errors.name}</Field.ErrorText>}
        </Field.Root>

        {/* Email (disabled) */}
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input
            value={profile.email}
            disabled
            variant="outline"
            opacity={0.6}
          />
          <Text fontSize="xs" color="fg.muted">
            Email changes require verification. Contact support.
          </Text>
        </Field.Root>

        {/* Bio */}
        <Field.Root>
          <Field.Label>Bio</Field.Label>
          <textarea
            value={profile.bio}
            onChange={e =>
              setProfile(p => ({ ...p, bio: e.target.value }))
            }
            rows={3}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid var(--chakra-colors-border)',
              background: 'var(--chakra-colors-bg)',
              color: 'var(--chakra-colors-fg)',
              fontSize: '14px',
              resize: 'vertical',
            }}
            placeholder="Tell your team a bit about yourself..."
          />
        </Field.Root>

        {/* Timezone + Language */}
        <HStack gap={4}>
          <Field.Root flex={1}>
            <Field.Label>Timezone</Field.Label>
            <select
              value={profile.timezone}
              onChange={e =>
                setProfile(p => ({ ...p, timezone: e.target.value }))
              }
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid var(--chakra-colors-border)',
                background: 'var(--chakra-colors-bg)',
                color: 'var(--chakra-colors-fg)',
                fontSize: '14px',
              }}
            >
              <option value="America/Los_Angeles">Pacific Time (UTC-8)</option>
              <option value="America/New_York">Eastern Time (UTC-5)</option>
              <option value="Europe/London">GMT (UTC+0)</option>
              <option value="Europe/Paris">Central European (UTC+1)</option>
            </select>
          </Field.Root>
          <Field.Root flex={1}>
            <Field.Label>Language</Field.Label>
            <select
              value={profile.language}
              onChange={e =>
                setProfile(p => ({ ...p, language: e.target.value }))
              }
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid var(--chakra-colors-border)',
                background: 'var(--chakra-colors-bg)',
                color: 'var(--chakra-colors-fg)',
                fontSize: '14px',
              }}
            >
              <option value="en">English</option>
              <option value="fr">Francais</option>
              <option value="de">Deutsch</option>
              <option value="es">Espanol</option>
            </select>
          </Field.Root>
        </HStack>

        {/* Success alert */}
        {saved && (
          <Alert.Root status="success" variant="subtle" borderRadius="lg">
            <Alert.Indicator />
            <Alert.Description>Changes saved successfully.</Alert.Description>
          </Alert.Root>
        )}

        {/* Actions */}
        <HStack justify="flex-end" gap={3} pt={2}>
          <Button
            variant="ghost"
            type="button"
            disabled={!isDirty}
            onClick={() => {
              setProfile(mockProfile)
              setErrors({})
            }}
          >
            Discard changes
          </Button>
          <Button
            colorPalette="blue"
            type="submit"
            disabled={!isDirty}
            loading={saving}
            loadingText="Saving..."
          >
            Save changes
          </Button>
        </HStack>
      </VStack>
    </form>
  )
}

// ─── Notifications Tab ───────────────────────────────────────────────────────
function NotificationsTab() {
  const [prefs, setPrefs] = useState<NotificationPrefs>(mockNotifPrefs)
  const [savingKey, setSavingKey] = useState<string | null>(null)

  const toggle = async (key: keyof NotificationPrefs) => {
    setSavingKey(key)
    await new Promise(r => setTimeout(r, 400))
    setPrefs(p => ({ ...p, [key]: !p[key] }))
    setSavingKey(null)
  }

  return (
    <VStack gap={4} align="stretch" maxW="2xl" mx="auto">
      <Text fontSize="lg" fontWeight="semibold">
        Notification Preferences
      </Text>

      {/* Task notifications card */}
      <Card.Root variant="elevated">
        <Card.Header pb={0}>
          <Text
            fontWeight="semibold"
            fontSize="sm"
            color="fg.muted"
            letterSpacing="wider"
          >
            TASK NOTIFICATIONS
          </Text>
        </Card.Header>
        <Card.Body>
          <VStack gap={0} align="stretch">
            {(
              [
                {
                  key: 'taskAssigned' as const,
                  label: 'Assigned to me',
                  desc: 'When a task is assigned to you',
                },
                {
                  key: 'taskDue' as const,
                  label: 'Due soon reminders',
                  desc: '24 hours before a task is due',
                },
                {
                  key: 'mentions' as const,
                  label: 'Mentions',
                  desc: 'When someone @mentions you',
                },
                {
                  key: 'comments' as const,
                  label: 'Comments',
                  desc: 'New comments on your tasks',
                },
              ] as const
            ).map(({ key, label, desc }) => (
              <SettingSwitch
                key={key}
                label={label}
                description={desc}
                checked={prefs[key]}
                onChange={() => toggle(key)}
                saving={savingKey === key}
              />
            ))}
          </VStack>
        </Card.Body>
      </Card.Root>

      {/* Updates & Alerts card */}
      <Card.Root variant="elevated">
        <Card.Header pb={0}>
          <Text
            fontWeight="semibold"
            fontSize="sm"
            color="fg.muted"
            letterSpacing="wider"
          >
            UPDATES &amp; ALERTS
          </Text>
        </Card.Header>
        <Card.Body>
          <VStack gap={0} align="stretch">
            <SettingSwitch
              label="Product updates"
              description="New features and improvements"
              checked={prefs.productUpdates}
              onChange={() => toggle('productUpdates')}
              saving={savingKey === 'productUpdates'}
            />
            <HStack
              justify="space-between"
              py={3}
              borderBottomWidth="1px"
              borderColor="border"
            >
              <Box>
                <HStack gap={2}>
                  <Text fontSize="sm" fontWeight="medium">
                    Security alerts
                  </Text>
                  <Badge size="xs" variant="subtle" colorPalette="gray">
                    Required
                  </Badge>
                </HStack>
                <Text fontSize="xs" color="fg.muted">
                  Always enabled for your safety
                </Text>
              </Box>
              <Switch.Root checked disabled size="md">
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
              </Switch.Root>
            </HStack>
            <SettingSwitch
              label="Weekly email digest"
              description="Summary of your team activity"
              checked={prefs.emailDigest}
              onChange={() => toggle('emailDigest')}
              saving={savingKey === 'emailDigest'}
            />
          </VStack>
        </Card.Body>
      </Card.Root>
    </VStack>
  )
}

// ─── Security Tab ────────────────────────────────────────────────────────────
function SecurityTab() {
  const [currentPw, setCurrentPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [pwError, setPwError] = useState('')
  const [pwSaving, setPwSaving] = useState(false)
  const [pwSaved, setPwSaved] = useState(false)
  const [twoFactor, setTwoFactor] = useState(false)
  const [sessions, setSessions] = useState(mockSessions)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteInput, setDeleteInput] = useState('')

  const pwStrength =
    newPw.length === 0 ? 0 : newPw.length < 8 ? 1 : newPw.length < 12 ? 2 : 3
  const strengthColor = ['gray', 'red', 'yellow', 'green'][pwStrength]
  const strengthLabel = ['', 'Weak', 'Fair', 'Strong'][pwStrength]

  const handlePwChange = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newPw !== confirmPw) {
      setPwError('Passwords do not match')
      return
    }
    if (newPw.length < 8) {
      setPwError('Password must be at least 8 characters')
      return
    }
    setPwError('')
    setPwSaving(true)
    await new Promise(r => setTimeout(r, 800))
    setPwSaving(false)
    setPwSaved(true)
    setCurrentPw('')
    setNewPw('')
    setConfirmPw('')
    setTimeout(() => setPwSaved(false), 3000)
  }

  const revokeSession = (id: string) => {
    setSessions(s => s.filter(s => s.id !== id))
  }

  return (
    <VStack gap={4} align="stretch" maxW="2xl" mx="auto">
      {/* Change Password */}
      <Card.Root variant="elevated">
        <Card.Header>
          <Text fontWeight="semibold">Change Password</Text>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handlePwChange}>
            <VStack gap={4} align="stretch">
              <Field.Root>
                <Field.Label fontSize="sm">Current password</Field.Label>
                <Input
                  type="password"
                  value={currentPw}
                  onChange={e => setCurrentPw(e.target.value)}
                  placeholder="••••••••"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label fontSize="sm">New password</Field.Label>
                <Input
                  type="password"
                  value={newPw}
                  onChange={e => {
                    setNewPw(e.target.value)
                    setPwError('')
                  }}
                  placeholder="••••••••"
                />
                {newPw && (
                  <HStack gap={2} mt={1}>
                    {[1, 2, 3].map(i => (
                      <Box
                        key={i}
                        h="3px"
                        flex={1}
                        borderRadius="full"
                        bg={
                          pwStrength >= i
                            ? `${strengthColor}.500`
                            : 'bg.subtle'
                        }
                      />
                    ))}
                    <Text
                      fontSize="xs"
                      color={`${strengthColor}.500`}
                      minW={8}
                    >
                      {strengthLabel}
                    </Text>
                  </HStack>
                )}
              </Field.Root>

              <Field.Root invalid={!!pwError}>
                <Field.Label fontSize="sm">Confirm new password</Field.Label>
                <Input
                  type="password"
                  value={confirmPw}
                  onChange={e => {
                    setConfirmPw(e.target.value)
                    setPwError('')
                  }}
                  placeholder="••••••••"
                />
                {pwError && <Field.ErrorText>{pwError}</Field.ErrorText>}
              </Field.Root>

              {pwSaved && (
                <Alert.Root status="success" variant="subtle" borderRadius="lg">
                  <Alert.Indicator />
                  <Alert.Description>
                    Password updated successfully.
                  </Alert.Description>
                </Alert.Root>
              )}

              <Button
                colorPalette="blue"
                type="submit"
                loading={pwSaving}
                loadingText="Updating..."
                alignSelf="flex-end"
              >
                Update password
              </Button>
            </VStack>
          </form>
        </Card.Body>
      </Card.Root>

      {/* Two-Factor Authentication */}
      <Card.Root variant="elevated">
        <Card.Body>
          <HStack justify="space-between" gap={4}>
            <Box>
              <Text fontWeight="semibold">Two-Factor Authentication</Text>
              <Text fontSize="sm" color="fg.muted" mt={1}>
                {twoFactor
                  ? 'Enabled — your account is more secure'
                  : 'Add an extra layer of security to your account'}
              </Text>
            </Box>
            <HStack gap={3} shrink={0}>
              {twoFactor && (
                <Button size="sm" variant="outline" colorPalette="blue">
                  Setup Authenticator
                </Button>
              )}
              <Switch.Root
                checked={twoFactor}
                onCheckedChange={e => setTwoFactor(e.checked)}
                size="lg"
              >
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
              </Switch.Root>
            </HStack>
          </HStack>
        </Card.Body>
      </Card.Root>

      {/* Active Sessions */}
      <Card.Root variant="elevated">
        <Card.Header>
          <Text fontWeight="semibold">Active Sessions</Text>
        </Card.Header>
        <Card.Body>
          <VStack gap={3} align="stretch">
            {sessions.map(s => (
              <HStack
                key={s.id}
                justify="space-between"
                p={3}
                bg="bg.subtle"
                borderRadius="lg"
              >
                <Box>
                  <HStack gap={2}>
                    <Text fontSize="sm" fontWeight="medium">
                      {s.browser}
                    </Text>
                    {s.current && (
                      <Badge size="xs" colorPalette="green" variant="subtle">
                        Current
                      </Badge>
                    )}
                  </HStack>
                  <Text fontSize="xs" color="fg.muted">
                    {s.os} · {s.location} · {s.lastActive}
                  </Text>
                </Box>
                {!s.current && (
                  <Button
                    size="xs"
                    variant="outline"
                    colorPalette="red"
                    onClick={() => revokeSession(s.id)}
                  >
                    Revoke
                  </Button>
                )}
              </HStack>
            ))}
          </VStack>
        </Card.Body>
      </Card.Root>

      {/* Danger Zone */}
      <Alert.Root
        status="error"
        variant="subtle"
        borderRadius="xl"
        flexDirection="column"
        alignItems="flex-start"
        gap={3}
      >
        <HStack>
          <Alert.Indicator />
          <Alert.Title fontWeight="semibold">Danger Zone</Alert.Title>
        </HStack>
        <Alert.Description>
          <VStack align="start" gap={3}>
            <Text fontSize="sm">
              Permanently delete your account and all associated data. This
              action cannot be undone.
            </Text>
            {!showDeleteConfirm ? (
              <Button
                size="sm"
                colorPalette="red"
                variant="solid"
                onClick={() => setShowDeleteConfirm(true)}
              >
                Delete Account
              </Button>
            ) : (
              <VStack align="start" gap={2}>
                <Text fontSize="sm" fontWeight="medium">
                  Type DELETE to confirm:
                </Text>
                <HStack>
                  <Input
                    size="sm"
                    value={deleteInput}
                    onChange={e => setDeleteInput(e.target.value)}
                    placeholder="DELETE"
                    w="120px"
                  />
                  <Button
                    size="sm"
                    colorPalette="red"
                    disabled={deleteInput !== 'DELETE'}
                  >
                    Confirm Delete
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setShowDeleteConfirm(false)
                      setDeleteInput('')
                    }}
                  >
                    Cancel
                  </Button>
                </HStack>
              </VStack>
            )}
          </VStack>
        </Alert.Description>
      </Alert.Root>
    </VStack>
  )
}

// ─── Root App ────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState('profile')

  return (
    <Box minH="100vh" bg="bg" fontFamily="Inter, system-ui, sans-serif">
      {/* Top bar */}
      <Box
        bg="bg"
        borderBottomWidth="1px"
        borderColor="border"
        px={6}
        py={3}
        position="sticky"
        top={0}
        zIndex={10}
      >
        <HStack justify="space-between">
          <Text fontWeight="bold" fontSize="lg" color="blue.500">
            Settings
          </Text>
          <HStack gap={2}>
            <Avatar.Root size="sm" style={{ backgroundColor: '#3B82F6' }}>
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar.Root>
            <Text fontSize="sm">Jordan Davis</Text>
          </HStack>
        </HStack>
      </Box>

      {/* Tabs */}
      <Tabs.Root value={tab} onValueChange={e => setTab(e.value)} variant="line">
        <Box
          borderBottomWidth="1px"
          borderColor="border"
          px={6}
          position="sticky"
          top="64px"
          bg="bg"
          zIndex={9}
        >
          <Tabs.List gap={0}>
            <Tabs.Trigger value="profile" px={4} py={3}>
              Profile
            </Tabs.Trigger>
            <Tabs.Trigger value="notifications" px={4} py={3}>
              Notifications
            </Tabs.Trigger>
            <Tabs.Trigger value="security" px={4} py={3}>
              Security
            </Tabs.Trigger>
          </Tabs.List>
        </Box>

        <Box px={6} py={8}>
          <Tabs.Content value="profile">
            <ProfileTab />
          </Tabs.Content>
          <Tabs.Content value="notifications">
            <NotificationsTab />
          </Tabs.Content>
          <Tabs.Content value="security">
            <SecurityTab />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  )
}
