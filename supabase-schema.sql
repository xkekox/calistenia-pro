create table if not exists public.calpro_user_state (
    user_id uuid primary key references auth.users(id) on delete cascade,
    email text not null unique,
    day integer not null default 1,
    restrictions jsonb not null default '[]'::jsonb,
    completed_days jsonb not null default '{}'::jsonb,
    last_completed_date text,
    assessment_done boolean not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

alter table public.calpro_user_state enable row level security;

create policy "Users can view own state"
on public.calpro_user_state
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert own state"
on public.calpro_user_state
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update own state"
on public.calpro_user_state
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create or replace function public.handle_calpro_user_state_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists trg_calpro_user_state_updated_at on public.calpro_user_state;

create trigger trg_calpro_user_state_updated_at
before update on public.calpro_user_state
for each row
execute function public.handle_calpro_user_state_updated_at();
