"use client"

import Image from "next/image";
import map from 'public/property-map.jpg';
import {Card, Modal, ModalBody, ModalContent, useDisclosure} from "@nextui-org/react";

export function PropertyMap() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Card isPressable shadow="lg" className="max-w-5xl m-4" onPress={onOpen}>
        <Image src={map} alt="property map of whispering oaks"/>
      </Card>
      <Modal size="4xl" placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {_ => (
            <ModalBody>
              <Image src={map} alt="property map of whispering oaks"/>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}