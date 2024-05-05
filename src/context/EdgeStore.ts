import { type EdgeStoreRouter } from '../../server/api'; // Will this work? That's how they do it in the tutorial...
import { createEdgeStoreProvider } from '@edgestore/react';
const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>();
export { EdgeStoreProvider, useEdgeStore };
