"use client"
import { Heading, Link, Flex, Container, DropdownMenu, Button  } from '@radix-ui/themes';
import { CaretDownIcon } from '@radix-ui/react-icons';
import React from 'react'
import NextLink from 'next/link'
import { useSession, signOut } from 'next-auth/react'

function Navbar() {

    const { data: session, status} = useSession();
    console.log(session);

    if (status === "loading") return null;

    return (
        <nav className="bg-zinc-700 py-4 px-5 md:px-0">
            <Container >
                <Flex justify="between" align="center">
                    <NextLink href="/" passHref>
                        <Link asChild>
                            <Heading>
                                RadixNext
                            </Heading>
                        </Link>
                    </NextLink>

                    <ul className="flex gap-x-2 items-center">

                        {
                            !session && (
                                <>
                                    <li>
                                        <Link asChild>
                                            <NextLink href="/auth/login" passHref>
                                            Login
                                            </NextLink>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link asChild>
                                            <NextLink href="/auth/register" passHref>
                                            Register
                                            </NextLink>
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            session && (
                                <>
                                <li>
                                    <Link asChild>
                                        <NextLink href="/dashboard" passHref>
                                            Dashboard
                                        </NextLink>
                                    </Link>
                                </li>
                                <li>
                                <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                        <Button variant="soft">
                                            {session?.user?.name}
                                            <DropdownMenu.TriggerIcon />
                                        </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content>
                                        <DropdownMenu.Item>My Profile</DropdownMenu.Item>
                                        <DropdownMenu.Separator />
                                        <DropdownMenu.Item>Setting</DropdownMenu.Item>
                                        <DropdownMenu.Separator />
                                        <DropdownMenu.Item color="red" onClick={() => signOut()}>
                                            Logout
                                        </DropdownMenu.Item>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Root>

                                </li>
                                </>
                            )
                        }

                    </ul>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar