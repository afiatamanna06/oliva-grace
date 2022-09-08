import { Flex } from "@chakra-ui/react"
import Link from "next/link"
import socialLinks from "./SocialLinks"

function SocialSites() {
  return (
    <Flex gap={2}>
        {socialLinks.map(({Icon, path}) => (
            <Link key={path} href={path} passHref>
                <Icon color="black" size={22} />
            </Link>
        ))}
    </Flex>
  )
}

export default SocialSites