'use client';
import { Div, Input, Label, P } from '@stylin.js/elements';
import { propOr } from 'ramda';
import { ChangeEventHandler, DragEventHandler, FC, useState } from 'react';
import toast from 'react-hot-toast';

import { FolderSVG } from '@/components/svg';
import { getBase64 } from '@/utils';
import { useVehicle } from '@/constants/context';

const UploadImage: FC = ({ setValue }) => {
  const [dragging, setDragging] = useState(false);

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return toast.error('Something went wrong');

    if (!file.type.includes('image/'))
      return toast.error('Make sure that you are sending a image file');

    const imageBase64 = await getBase64(file).catch(() =>
      toast.error('Something went wrong')
    );

    setValue('imageUrl', imageBase64);
  };

  const handleDropFile: DragEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();

    if (e.dataTransfer.items) {
      const item = e.dataTransfer.items[0];

      if (item.kind !== 'file' || !item.type.includes('image/'))
        return toast.error('Make sure that you are sending a image file');

      const file = item.getAsFile();

      if (!file) return toast.error('Something went wrong');

      const imageBase64 = await getBase64(file).catch((e) =>
        toast.error(propOr('Something went wrong', 'message', e))
      );

      setValue('imageUrl', imageBase64);

      return;
    }

    const file = e.dataTransfer.files[0];

    if (!file) return toast.error('Something went wrong');

    if (!file.type.includes('image/'))
      return toast.error('Make sure that you are sending a image file');

    const imageBase64 = await getBase64(file).catch(() =>
      toast.error('Something went wrong')
    );

    setValue('imageUrl', imageBase64);
  };

  return (
    <Div
      p="1rem"
      gap="1rem"
      bg="surface"
      width="100%"
      display="flex"
      borderWidth="1px"
      alignItems="center"
      borderRadius="0.5rem"
      justifyContent="center"
      onDrop={handleDropFile}
      onDragEnter={() => setDragging(true)}
      onDragLeave={() => setDragging(false)}
      onDragOver={(e) => e.preventDefault()}
      borderStyle={dragging ? 'solid' : 'dashed'}
      borderColor={dragging ? '#0053db' : '#E0E0D7'}
    >
      <Div
        display="flex"
        width="2.5rem"
        height="2.5rem"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        bg="#dbe1ff"
      >
        <FolderSVG maxWidth="1.4rem" maxHeight="1.4rem" width="100%" />
      </Div>
      <P fontSize="1rem" lineHeight="1rem" color="#5F5F5B" fontWeight="400">
        Drop your file here or{' '}
        <Label
          fontSize="1rem"
          htmlFor="file"
          color="#0053db"
          cursor="pointer"
          fontWeight="400"
          textDecoration="underline"
        >
          upload
        </Label>
        <Div display="none">
          <Input
            id="file"
            type="file"
            accept="image/*"
            onChange={handleChangeFile}
          />
        </Div>
      </P>
    </Div>
  );
};

export default UploadImage;
