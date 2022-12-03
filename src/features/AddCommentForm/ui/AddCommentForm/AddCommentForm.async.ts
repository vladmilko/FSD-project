import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export default lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
