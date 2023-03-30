import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const formatLabel = (label, unit, before) => {
  if (before) {
    return `${unit}${label.toLocaleString()}`
  }
  return `${label.toLocaleString()}${unit}`
}

const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount, before=true }) => {
  return (
    <Stack my={3}>
      <Stack gap={.25}>
        <Typography variant='subtitle1'>{label}</Typography>
        <Typography variant='h5'>{formatLabel(value, unit, before)}</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="off"
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant='caption' color='text.secondary'>{formatLabel(min, unit, before)}</Typography>
        <Typography variant='caption' color='text.secondary'>{formatLabel(max, unit, before)}</Typography>
      </Stack>

    </Stack>
  )
}

export default SliderComponent