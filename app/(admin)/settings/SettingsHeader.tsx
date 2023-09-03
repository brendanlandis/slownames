'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SelectedBandProvider } from '../api/SelectedBandContext';
import SettingsForm from './SettingsForm';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

export default function SettingsHeader(props) {
    return (
        <SelectedBandProvider>
            <QueryClientProvider client={queryClient}>
                <SettingsForm humanNum={props.humanNum} />
                {/* <ReactQueryDevtools initialIsOpen /> */}
            </QueryClientProvider>
        </SelectedBandProvider>
    );
}
